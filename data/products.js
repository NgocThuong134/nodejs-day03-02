const url =
  "https://tiki.vn/api/personalish/v1/blocks/listings?limit=40&include=advertisement&aggregations=2&version=home-persionalized&trackity_id=0c5337dd-cf75-db38-3651-1b34f1d2dd76&category=1789&page=1&urlKey=dien-thoai-may-tinh-bang";

var list_products = []; // Initialize an empty array to store products

function fetchData() {
  fetch(url)
    .then((response) => response.json())
    .then((data) => {
      const product = data.data.map((element) => {
        return {
          name: element.name,
          company: element.brand_name,
          img: element.thumbnail_url,
          price: element.price.toString(),
          star: element.rating_average,
          rateCount: element.review_count,
          promo: {
            name: element.discount === 0 ? "tragop" : "giamgia",
            value: element.discount === 0 ? "0" : element.discount.toString(),
          },
          detail: {
            screen: "IPS LCD, 6.0', HD+",
            os: "Android 8.1 (Oreo)",
            camara: "13 MP",
            camaraFront: "5 MP",
            cpu: "Qualcomm Snapdragon 425 4 nhân 64-bit",
            ram: "2 GB",
            rom: "16 GB",
            microUSB: "MicroSD, hỗ trợ tối đa 256 GB",
            battery: "3300 mAh",
          },
          masp: element.id.toString(),
        };
      });
      setListProducts(product);
    });
}
fetchData();
