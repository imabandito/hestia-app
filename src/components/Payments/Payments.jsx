export function Payments({ data }) {
  return (
    <div className='payments'>
      {data.map((pay) => (
        <div key={pay.id}>
          <img src={pay.src} alt={pay.alt} />
        </div>
      ))}
    </div>
  );
}
