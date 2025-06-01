import { Dataset } from "@/lib/interfaces";
import { DatasetListQueryOptions } from "@/lib/interfaces";

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
        const response = await fetch(
          `${this.DMS}/api/3/action/organization_list`
        );
        const responseData = await response.json();
        const organizations: Array<string> = responseData.result;
        return organizations;
      }


}

const CKAN = CkanApiClient.getInstance(process.env.DMS!);
export { CKAN };
