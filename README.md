# Serverless for Event-Driven

## Trigger

### Synchronous

- API GateWay + Lambda Func
  - [x] Determin Error
  - [x] Decide Retry Option

### Asynchronous

- AWS S3 + Lambda Func (Send / Read To Queue System)
  - [x] Set Retry Option
  - [x] Handling Dead-Letter Queue(DLQ)

### Poll-Based

- EventBridge + Lambda Func ( Get SQS Queue, Use Stream )
  - [x] AWS SQS
  - [x] Kinesis Stream
  - [x] Handle To Read Or Batch
  - [x] Set a Batch Size

### Function URL VS Amazon API Gateway

- URL을 갖는다는 관점에서는 둘다 동일함
- Function URL은 Request Validation, Throttling Customer Authorization, Customer Domain Name, Usage Plans등등의 이점을 가질 수 없다.
