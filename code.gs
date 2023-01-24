function doGet(){
  return HtmlService.createTemplateFromFile('index').evaluate();
}
function _createFolder(folderName){
  const targetFolder = DriveApp.getFolderById(PropertiesService.getScriptProperties().getProperty('folderId'));
  const parentFolder = targetFolder.createFolder(folderName);
  parentFolder.createFolder('Annotated CRF');
  parentFolder.createFolder('Define-XML');
  parentFolder.createFolder('Paper');
  parentFolder.createFolder('Protocol');
  _setSharingFolder(parentFolder);
}
function _setSharingFolder(targetFolder){
  const access = DriveApp.Access.ANYONE_WITH_LINK;
  const permission = DriveApp.Permission.VIEW;
  targetFolder.setSharing(access, permission);
}
