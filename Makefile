call-request-fun:
	curl -X GET https://ho6csye43tgiwvb4v2jx5vcjsm0ndhvi.lambda-url.ap-northeast-2.on.aws/?message=leedonggyu

call-async-calc:
	curl -X POST https://gln2swnxdmglxslfqvervte7q40nvqpe.lambda-url.ap-northeast-2.on.aws/ \
	-H "Content-Type: application/json" \
	-d '{idx1 : 10, idx2 : 300, opt : "+"}'