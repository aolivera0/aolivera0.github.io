import parse from 'html-react-parser';


export default function Card({word, meaning, policy, category, exception }) {
  return (
      <li className="bg-zinc-800 px-8 py-4 list-none mb-4">
        <h2 className="text-2xl font-semibold mt-1"> {parse(word)} </h2>
        <p> {parse(meaning)}</p>
        <p className="text-lg text-gray-200">{exception}</p>
        <p className="text-lg text-gray-300">
          {policy} &gt; {category}
        </p>
      </li>
  );
}
