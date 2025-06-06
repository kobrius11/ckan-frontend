import { Dataset } from "@/lib/interfaces";
import { DatasetListQueryOptions } from "@/lib/interfaces";
import { LoginResult } from "@/lib/interfaces/login.interface";

class CkanApiClient {
  public static instance: CkanApiClient;
  private DMS: string;

  private constructor(DMS: string) {
    this.DMS = DMS;
  }

  // Singleton pattern
  public static getInstance(DMS: string): CkanApiClient {
    if (!CkanApiClient.instance) {
      CkanApiClient.instance = new CkanApiClient(DMS);
    }

    return CkanApiClient.instance;
  }

  public async userLogin({
    username,
    password,
  }: {
    username: string;
    password: string;
  }) {
    const response = await fetch(`${this.DMS}/api/3/action/user_login`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        id: username,
        password: password,
      }),
    });
    const responseData: {
      success: boolean;
      result: LoginResult;
    } = await response.json();

    const token = responseData.result["frontend_token"];
    if (token) {
      sessionStorage.setItem("ckan-user", token);
    }
  }

  public async packageSearch() {}

  public async getPackageList() {
    const response = await fetch(`${this.DMS}/api/3/action/package_list`);
    const responseData: {
      success: boolean;
      result: string[];
    } = await response.json();
    return responseData.result;
  }

  public async getPackageListWithDetails(options: DatasetListQueryOptions) {
    const response = await fetch(
      `${this.DMS}/api/3/action/current_package_list_with_resources?offset=${options.offset}&limit=${options.limit}`
    );
    const responseData = await response.json();
    const datasets: Array<Dataset> = responseData.result;
    return datasets;
  }

  public async getPackageDetails(datasetName: string) {
    const response = await fetch(
      `${this.DMS}/api/3/action/package_show?id=${datasetName}`
    );
    const responseData = await response.json();
    //   if (responseData.success === false) {
    //     throw 'Could not find dataset';
    //   }
    const dataset: Dataset = responseData.result;
    return dataset;
  }

  public async getGroupList() {
    const response = await fetch(`${this.DMS}/api/3/action/group_list`);
    const responseData = await response.json();
    const groups: Array<string> = responseData.result;
    return groups;
  }

  public async getOrganizationList() {
    const response = await fetch(`${this.DMS}/api/3/action/organization_list`);
    const responseData = await response.json();
    const organizations: Array<string> = responseData.result;
    return organizations;
  }

  public async packageCreate({
    title,
    description,
    tags,
    license,
    organization,
    visibility,
  }: {
    title: string,
    description?: string | undefined
    tags?: string | undefined
    license?: string | undefined
    organization: string
    visibility: string
  }) {
    const apiKey = sessionStorage.getItem("ckan-user");
    const response = await fetch(`${this.DMS}/api/3/action/package_create`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        ...(apiKey ? { Authorization: apiKey } : {}),
      },
      body: JSON.stringify({
        "title": title,
        "name": title,
        "description": description,
        // "tags": tags,
        // "licence": license,
        "owner_org": organization,
        "visibility": visibility,
      }),
    });
    const responseData = await response.json();
    const organizations: Array<string> = responseData.result;
    return organizations;
  }
}

const CKAN = CkanApiClient.getInstance(process.env.NEXT_PUBLIC_DMS!);
export { CKAN };
