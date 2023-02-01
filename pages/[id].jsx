import Image from "next/image";
const SingleImagePage = ({ data }) => {
  return (
    <>
      {/* <div className="h-screen flex items-center justify-center bg-teal-50">
        <div className="max-w-7xl flex items-center justify-between px-12">
          <Image
            className="h-96 md:inline-flex object-contain"
            src={data.image}
            width={500}
            height={300}
            alt={data.title}
          />
          <div className="space-y-5 p-20">
            <h2 className="text-2xl font-bold">{data.title}</h2>
            <p className="text-xl italic">{data.artist_name}</p>
            <p className="">{data.description}</p>
          </div>
        </div>
      </div> */}

<div className="sm:h-screen flex flex-col sm:flex-row bg-teal-50">
          <Image
            className="w-full sm:w-1/2"
            src={data.image}
            width={500}
            height={300}
            alt={data.title}
          />
          <div className="flex flex-col items-center px-20 py-36 sm:w-1/2 space-y-5">
            <h2 className="text-2xl font-bold">{data.title}</h2>
            <p className="text-xl italic">{data.artist_name}</p>
            <p className="">{data.description}</p>
          </div>

      </div>

      {/* <div class="flex flex-col sm:flex-row">
  <img src="your-image-source.jpg" alt="your-image" class="w-full sm:w-1/2" />
  <div class="p-4 sm:w-1/2">
    <h2 class="text-lg font-bold">Your Title</h2>
    <p class="text-gray-600">Your description or text here.</p>
  </div>
</div> */}
    </>
  );
};

export default SingleImagePage;

export async function getStaticPaths() {
  const data = await import("/data/data.json");
  const allItems = data.image_items;

  const allPaths = allItems.map((path) => {
    return {
      params: {
        id: path.id,
      },
    };
  });

  return {
    paths: allPaths,
    fallback: false,
  };
}

export async function getStaticProps(context) {
  const id = context.params.id;
  const { image_items } = await import("/data/data.json");
  const imageData = image_items.find((item) => id === item.id);

  return {
    props: { data: imageData },
  };
}
