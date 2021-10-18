import Layout from "../components/Layout";
import { useState } from "react";
import Link from "next/link";

export async function getServerSideProps() {
  const res = await fetch(
    `https://604048b4f34cf600173c7cda.mockapi.io/api/v1/list-artisan`
  );
  const data = await res.json();

  return { props: { data } };
}
export default function Home({ data }) {
  const [showData, setShowData] = useState(data);

  return (
    <div>
      <Layout title="Home" search={true} data={showData} setData={setShowData}>
        <div className="container mx-auto">
          <h1 className="text-2xl font-bold p-2">List of artisan</h1>
          <div className="pl-10 mt-5">
            {showData.map((artisan) => (
              <Link
                key={artisan.id}
                href="/artisan/[id]"
                as={`/artisan/${artisan.id}`}
              >
                <a>
                  <div className="mb-5 lg:mb-10">
                    <div className="flex ">
                      <img className="w-16 h-16 rounded" src={artisan.avatar} />
                      <div className="text-gray-400 font-semibold my-auto ml-5">
                        {artisan.name}
                      </div>
                    </div>
                    <div className="p-1">{artisan.description}</div>
                  </div>
                </a>
              </Link>
            ))}
          </div>
          <div className="grid grid-cols-2 px-20">
            <button className="col-span-1 py-3 border-t border-r border-l rounded border-black">
              Stocks
            </button>
            <Link href="/profile">
              <a className="col-span-1 text-center py-3 border-t border-r border-l rounded border-black">
                Profile
              </a>
            </Link>
          </div>
        </div>
      </Layout>
    </div>
  );
}
