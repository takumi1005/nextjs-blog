import Image from "next/image";
import Link from "next/link";

const ArticleList = () => {
	return (
		<div>
			<article className="shadow my-4 flex flex-col">
				<Link href="#" className="hover:opacity-75">
					<Image
						src="https://source.unsplash.com/collection/1346951/1000x500?sig=1"
						alt=""
						width={1280}
						height={300}
					/>
				</Link>
				<div className="bg-white flex flex-col justify-start p-6">
					<Link href="#" className="text-blue-700 pb-4 font-bold">
						Technology
					</Link>
					<Link
						href="#"
						className="text-slate-900 text-3xl font-bold hover:text-gray-700"
					>
						Next.jsの勉強中
					</Link>
					<p className="text-sm pb-3 text-slate-900">Published on 2023/1/1</p>
					<Link href="#" className="pb-6 text-slate-900">
						Lorem ipsum dolor sit, amet consectetur adipisicing elit.
						Perferendis modi doloribus impedit soluta quis adipisci, sint
						suscipit iure provident deserunt tempora vero maxime eaque dolor
						odio totam quod possimus ullam?
					</Link>
					<Link href="#" className="text-pink-800 hover:text-black">
						続きを読む
					</Link>
				</div>
			</article>
		</div>
	);
};

export default ArticleList;
