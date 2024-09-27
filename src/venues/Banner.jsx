export function Banner() {
  return (
    <div
      className="bannerImg"
      style={{
        position: "absolute",
        top: 0,
        left: 0,
        width: "100%",
        height: "300px",
        backgroundImage: `url('https://zpoton.com/publicdata/productdb/products/1051/images/5913_n.jpg')`,
        backgroundSize: "cover",
        backgroundPosition: "center 40%",
        backgroundRepeat: "no-repeat",
        zIndex: -1,
      }}
    />
  );
}
