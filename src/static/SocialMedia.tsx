import Image from 'next/image';

function SocialMedia ({size} : {size: number}) {

    return (<div className="flex justify-center gap-2 pb-4"  style={{ pointerEvents: 'auto' }}>
    <a className="bg-black bg-opacity-50 p-4 rounded-full transition-all hover:scale-110 scale-100" href="https://www.linkedin.com/in/vijaykumarmalhi/"><Image src="/icons/linkedin.svg" alt="Icon" width={size} height={size} /></a>
    <a className="bg-black bg-opacity-50 p-4 rounded-full transition-all hover:scale-110 scale-100" href="https://github.com/VijayMalhi047"><Image src="/icons/github.svg" alt="Icon" width={size} height={size} /></a>
    <a className="bg-black bg-opacity-50 p-4 rounded-full transition-all hover:scale-110 scale-100" href="https://youtube.com/@vj-malhi3827"><Image src="/icons/youtube.svg" alt="Icon" width={size} height={size} /></a>
  </div>)
}

export default SocialMedia;