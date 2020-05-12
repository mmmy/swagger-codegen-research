/**
 * 大数据中台
 * 大数据中台
 *
 * OpenAPI spec version: 1.0.0
 * 
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 * Do not edit the class manually.
 */


let defaultBasePath = 'http://localhost';


interface DeleteApiDataworkFolder { // 
    /**
    * 目录id
    */
    'id'?: string;
}

interface InlineResponse200 { // 
    'result'?: boolean;
    'msg'?: string;
    'data'?: string;
}

interface InlineResponse2001 { // 
    'result'?: boolean;
    'msg'?: string;
    'data'?: InlineResponse2001Data;
}

interface InlineResponse2001Data { // 
    'status'?: string;
    'schedule'?: string;
    'nodes'?: InlineResponse2001DataNodes;
    'nextCodes'?: Array<InlineResponse2001DataNextCodes>;
    'name'?: string;
    'lines'?: InlineResponse2001DataLines;
    'id'?: string;
    'dependCodes'?: Array<InlineResponse2001DataNextCodes>;
    'code'?: string;
}

interface InlineResponse2001DataLines { // 
    'behindNodeId'?: string;
    'aheadNodeId'?: string;
}

interface InlineResponse2001DataNextCodes { // 
    'name'?: string;
    'code'?: string;
}

interface InlineResponse2001DataNodes { // 
    'type'?: string;
    'nodeId'?: string;
    'name'?: string;
    'folderId'?: string;
    'flowObjectType'?: string;
    'flowId'?: string;
}

interface InlineResponse2002 { // 
    'result'?: boolean;
    'msg'?: string;
    'data'?: InlineResponse2002Data;
}

interface InlineResponse2002Data { // 
    'type'?: string;
    'name'?: string;
    'isBuildin'?: number;
    'id'?: string;
    'icon'?: string;
    'description'?: string;
    'connStr'?: InlineResponse2002DataConnStr;
    'code'?: string;
}

interface InlineResponse2002DataConnStr { // 
    'user'?: string;
    'useSsh'?: number;
    'tableNamePrefix'?: string;
    'sshUser'?: string;
    'sshPort'?: string;
    'sshPassword'?: string;
    'sshHost'?: string;
    'port'?: number;
    'password'?: string;
    'name'?: string;
    'host'?: string;
    'database'?: string;
}

interface InlineResponse2003 { // 
    'result'?: boolean;
    'msg'?: string;
    'data'?: boolean;
}

interface PostApiDataworkFolder { // 
    /**
    * 目录父节点
    */
    'parentId'?: string;
    /**
    * 名称
    */
    'name'?: string;
    /**
    * 目录id,为空表示新增
    */
    'id'?: string;
    /**
    * 所属类型
    */
    'flowObjectType'?: string;
    /**
    * 流程编码
    */
    'flowCode'?: string;
}

interface PostApiProjectTable_ { // 
    'tableName'?: string;
    'partitionTable'?: number;
    'partitionFields'?: Array<PutApiProjectTablePartitionFields>;
    'nameCn'?: string;
    'lifeCycle'?: number;
    'layerId'?: string;
    'fields'?: Array<PutApiProjectTableFields>;
    'externalTable'?: number;
    'description'?: string;
    'ddl'?: string;
}

interface PutApiProjectTableFields { // 
    'primaryKey'?: number;
    'nameCn'?: string;
    'name'?: string;
    'length'?: number;
    'fieldType'?: string;
    'description'?: string;
}

interface PutApiProjectTablePartitionFields { // 
    'particleSize'?: string;
    'name'?: string;
    'length'?: number;
    'fieldType'?: string;
    'description'?: string;
    'dateFormat'?: string;
}

interface PutApiProjectTable_ { // 
    'tableName'?: string;
    'subjectId'?: string;
    'partitionFields'?: Array<PutApiProjectTablePartitionFields>;
    'nameCn'?: string;
    'logicId'?: string;
    'layerId'?: string;
    'id'?: string;
    'fields'?: Array<PutApiProjectTableFields>;
}

export declare namespace DataSourceApiRequest {
  interface dataSourceGetGet {
    id: string
  }
}
export declare namespace DataworkApiRequest {
  interface apiDataworkFolderDelete {
    rawPayload?: DeleteApiDataworkFolder
  }
  interface apiDataworkFolderPost {
    rawPayload?: PostApiDataworkFolder
  }
  interface apiDataworkGetGet {
    id: string
    code: string
    stage: string
  }
}
export declare namespace ProjectTableApiRequest {
  interface apiProjectTablePost {
    rawPayload?: PostApiProjectTable_
  }
  interface apiProjectTablePut {
    rawPayload?: PutApiProjectTable_
  }
}