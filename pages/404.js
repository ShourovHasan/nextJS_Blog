import Image from "next/image";
import Link from "next/link";

const PageNotFound = () => {
    return (
        <div>
            <Image src={'/404_error.png'} className='mx-auto'  width={800} height={700}></Image>
            <Link href={'/'} className='flex justify-center'>
                <button className="btn btn-primary">
                    Back to Home
                </button>
            </Link>
        </div>
    );
};

export default PageNotFound;