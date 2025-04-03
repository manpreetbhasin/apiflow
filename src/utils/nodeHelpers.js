export function getDefaultNodeData(nodeType) {
  switch(nodeType) {
    case 'ec2':
      return { label: 'EC2 Instance', instanceType: 't2.micro' };
    case 's3':
      return { label: 'S3 Bucket', storageClass: 'STANDARD' };
    case 'lambda':
      return { label: 'Lambda Function', runtime: 'nodejs14.x' };
    default:
      return { label: 'New Node' };
  }
}