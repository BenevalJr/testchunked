import api from "../services/api";

async function Status(aRequest, aResponse) {
  console.log(aRequest.headers);

  api
    .get("/status")
    .then((lResponse) => {
      console.log(lResponse.data);
      console.log(lResponse.headers);
      aResponse.setHeader(
        "Cache-Control",
        "s-maxage=10, stale-while-revalidate"
      );
      aResponse.json(lResponse.data);
    })
    .catch((lErr) => {
      console.log(lErr);
      aResponse.status(lErr.response.status).json(lErr.response.body);
    });
}

export default Status;
