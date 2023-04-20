export interface MediaLibraryOptions {
  api_key: string,
  cloud_name: string,
  insert_caption?: string,
  remove_header?: boolean;
}

export interface MediaLibraryProps {
  children?: (options: MediaLibraryCallbackOptions) => JSX.Element;
  onClose?: Function;
  onInsert?: Function;
  onOpen?: Function;
  options?: MediaLibraryPropsOptions;
}

export interface MediaLibraryPropsOptions {
  insertCaption?: MediaLibraryOptions['insert_caption']; 
  removeHeader?: MediaLibraryOptions['remove_header'];
}

export interface MediaLibraryCallbackOptions {
  cloudinary?: any;
  widget?: any;
  close?: Function;
  open?: Function;
}

export interface MediaLibraryInsertResults {
  mlId: string;
  assets: Array<MediaLibraryInsertResultsAsset>
}

export interface MediaLibraryInsertResultsAsset {
  access_control: any; // Array of?
  access_mode: string;
  bytes: number;
  created_at: string;
  created_by: { type: string, id: string }
  duration: any; // ?
  format: string;
  height: number;
  metadata: any; // Array of?
  public_id: string;
  resource_type: string;
  secure_url:string;
  tags: any; // Array of?
  type: string;
  uploaded_by: { type: string, id: string }
  url: string;
  version: number;
  width: number;
}