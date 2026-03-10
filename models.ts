export enum BpmnDefinitionStatus {
  DRAFT = 'DRAFT',
  DEPLOYED = 'DEPLOYED',
  ARCHIVED = 'ARCHIVED',
}

export enum BpmnInstanceStatus {
  RUNNING = 'RUNNING',
  COMPLETED = 'COMPLETED',
  FAILED = 'FAILED',
  CANCELED = 'CANCELED',
}

export enum BpmnActivityStatus {
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
  current_process_instance_id: string | null;
  created_at: Date;
  updated_at: Date;

  workflow_definition: bpmn_process_definition | null;
  workflow_instances: bpmn_process_instance[];
}

export interface bpmn_process_definition {
  id: string;
  workspace_id: string;
  process_key: string;
  name: string;
  version: number;
  status: BpmnDefinitionStatus;
  bpmn_xml: string;
  created_by: string | null;
  created_at: Date;
  updated_at: Date;

  process_instances: bpmn_process_instance[];
  project_tasks: project_task[];
}

export interface bpmn_process_instance {
  id: string;
  workspace_id: string;
  definition_id: string;
  project_task_id: string | null;
  business_key: string | null;
  status: BpmnInstanceStatus;
  started_at: Date;
  ended_at: Date | null;
  variables_json: unknown | null;

  definition: bpmn_process_definition;
  project_task: project_task | null;
  activities: bpmn_activity_instance[];
}

export interface bpmn_activity_instance {
  id: string;
  process_instance_id: string;
  element_id: string;
  element_type: string;
  name: string | null;
  assignee: string | null;
  status: BpmnActivityStatus;
  started_at: Date | null;
  ended_at: Date | null;
  error_message: string | null;

  process_instance: bpmn_process_instance;
}
