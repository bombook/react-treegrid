export enum WorkflowDefinitionStatus {
  DRAFT = 'DRAFT',
  DEPLOYED = 'DEPLOYED',
  ARCHIVED = 'ARCHIVED',
}

export enum WorkflowInstanceStatus {
  RUNNING = 'RUNNING',
  COMPLETED = 'COMPLETED',
  FAILED = 'FAILED',
  CANCELED = 'CANCELED',
}

export enum WorkflowActivityStatus {
  READY = 'READY',
  ACTIVE = 'ACTIVE',
  COMPLETED = 'COMPLETED',
  FAILED = 'FAILED',
  SKIPPED = 'SKIPPED',
}

export interface project_task {
  id: string;
  workspace_id: string | null;
  project_id: string;
  parent_id: string | null;
  name: string;
  start_date: Date;
  end_date: Date;
  progress: number;
  status: string | null;
  workflow_definition_id: string | null;
  current_workflow_instance_id: string | null;
  created_at: Date;
  updated_at: Date;

  workflow_definition: workflow_definition | null;
  workflow_instances: workflow_instance[];
}

export interface workflow_definition {
  id: string;
  workspace_id: string;
  workflow_key: string;
  name: string;
  version: number;
  status: WorkflowDefinitionStatus;
  workflow_xml: string;
  created_by: string | null;
  created_at: Date;
  updated_at: Date;

  workflow_instances: workflow_instance[];
  project_tasks: project_task[];
}

export interface workflow_instance {
  id: string;
  workspace_id: string;
  definition_id: string;
  project_task_id: string | null;
  business_key: string | null;
  status: WorkflowInstanceStatus;
  started_at: Date;
  ended_at: Date | null;
  variables_json: unknown | null;

  definition: workflow_definition;
  project_task: project_task | null;
  activities: workflow_activity_instance[];
}

export interface workflow_activity_instance {
  id: string;
  workflow_instance_id: string;
  element_id: string;
  element_type: string;
  name: string | null;
  assignee: string | null;
  status: WorkflowActivityStatus;
  started_at: Date | null;
  ended_at: Date | null;
  error_message: string | null;

  workflow_instance: workflow_instance;
}
