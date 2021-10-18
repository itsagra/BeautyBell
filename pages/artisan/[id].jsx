import Layout from "../../components/Layout";

export async function getServerSideProps({ query: { id } }) {
  const apiURL =
    "https://604048b4f34cf600173c7cda.mockapi.io/api/v1/list-artisan/" + id;
  try {
    const response = await fetch(apiURL);
    const data = await response.json();
    if (data == "Not found") {
      throw new Error();
    }
    return {
      props: {
        artisan: data,
      },
    };
  } catch (error) {
    return {
      notFound: true,
    };
  }
}

const Artisan = ({ artisan }) => {
  return (
    <div>
      <Layout title={artisan.name}>
        <div className="container mx-auto p-5">
          <div className="mb-5 lg:mb-10">
            <div className="flex ">
              <img className="w-16 h-16 rounded" src={artisan.avatar} />
              <div className="text-gray-400 font-semibold my-auto ml-5">
                {artisan.name}
                <div className="text-black">
                  {[...Array(+artisan.rating)].map((el, i) => (
                    <i key={i} className="fa fa-star"></i>
                  ))}
                  {[...Array(Math.abs(+artisan.rating - 5))].map((el, i) => (
                    <i
                      key={i + "star"}
                      className="fa fa-star text-gray-300"
                    ></i>
                  ))}
                </div>
              </div>
            </div>
            <div className="p-1">{artisan.description}</div>
          </div>
          <h1 className="text-xl font-bold">Services</h1>
          <div className="grid grid-cols-2 gap-2 md:grid-cols-4">
            {artisan.services.map((service) => (
              <div className="border border-black h-44">
                <div className="grid grid-cols-3">
                  <div className="col-span-1 h-10 w-10 m-2 justify-items-center bg-gray-500 rounded-full">
                    {" "}
                  </div>
                  <div className="col-span-2 my-auto">{service.name}</div>
                </div>
                <div className="p-2">price: Rp.{service.price}</div>
                <div className="p-2">{service.caption}</div>
              </div>
            ))}
          </div>
        </div>
      </Layout>
    </div>
  );
};

export default Artisan;
