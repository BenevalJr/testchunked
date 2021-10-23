async function TestChunked(aRequest, aResponse) {
  let lResponse = [];
  let lId;
  let lDescription;

  for (var i = 0; i < 100000000; i++) {
    lId = i.toString();
    lDescription = "description " + lId;
    lResponse.push({
      id: lId,
      description: lDescription,
    });
  }

  aResponse.status(200).json(lResponse);
}

export default TestChunked;
