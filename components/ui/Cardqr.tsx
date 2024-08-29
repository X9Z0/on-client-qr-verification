import Link from "next/link";
import Image from "next/image";

interface CardProps {
  title: string;
  description: string;
  imageUrl: any;
  imageAlt: string;
}

export default function Cardqr({
  title,
  description,
  imageUrl,
  imageAlt,
}: CardProps) {
  return (
    <div className="max-w-sm border rounded-lg shadow dark:bg-black dark:border-black">
      <Link href={"#"}>
        <Image
          src={imageUrl}
          alt={imageAlt}
          width={20}
          height={10}
          layout="responsive"
          className=""
        />
      </Link>
      <div className="p-5">
        <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white text-center">
          {title}
        </h5>
        <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
          {description}
        </p>
      </div>
    </div>
  );
}
