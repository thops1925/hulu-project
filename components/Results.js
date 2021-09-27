import Thumbnails from './Thumbnails';

function Results({ results }) {
  console.log(results);
  return (
    <div>
      {results.map((result) => (
        <Thumbnails key={result.id} result={result} />
      ))}
    </div>
  );
}

export default Results;
