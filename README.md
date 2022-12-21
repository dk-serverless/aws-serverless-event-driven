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
