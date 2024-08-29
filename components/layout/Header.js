export default function Header({ data }) {
  console.log({ headerData: data });
  return (
    <div className="flex w-full flex-row justify-between border-b border-gray-800 bg-black px-5 py-5 text-white">
      <div className="flex">Awesome Company</div>
      <div className="flex flex-row gap-5">
        <a href="#" target="_blank" rel="noopener noreferrer">
          About us
        </a>
        <a href="#" target="_blank" rel="noopener noreferrer">
          Services
        </a>
        <a href="#" target="_blank" rel="noopener noreferrer">
          Contact
        </a>
      </div>
    </div>
  );
}
