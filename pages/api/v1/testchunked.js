async function TestChunked(aRequest, aResponse) {
  lResponse = { status: "Ok" };
  aResponse.status(200).json(lResponse);
}

export default Status;
