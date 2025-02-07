const ShowData = ({ words_trend_n50, qty_trend_n50 }) => {
  const tableRows = (words_trend_n50, qty_trend_n50) => {
    return words_trend_n50.map((word, index) => (
      <tr key={index} className="hover:bg-slate-50">
        <td className="p-2 px-8 border-b border-slate-200">
          <p className="block text-sm text-slate-800">{index + 1}</p>
        </td>
        <td className="p-2 px-8 border-b border-slate-200">
          <p className="block text-sm text-slate-800">{word}</p>
        </td>
        <td className="p-2 border-b border-slate-200">
          <p className="block text-sm text-slate-800">{qty_trend_n50[index]}</p>
        </td>
      </tr>
    ));
  };

  return (
    <>
      <div className="relative flex flex-col w-full h-full overflow-scroll text-gray-700 bg-white shadow-md rounded-lg bg-clip-border">
        <table className="w-full text-left table-auto min-w-max">
          <thead>
            <tr>
              <th className="p-4 px-8 border-b border-slate-300 bg-slate-50">
                <p className="block text-sm font-normal leading-none text-slate-500">
                  Rank
                </p>
              </th>
              <th className="p-4 px-8 border-b border-slate-300 bg-slate-50">
                <p className="block text-sm font-normal leading-none text-slate-500">
                  Word
                </p>
              </th>
              <th className="p-2 border-b border-slate-300 bg-slate-50">
                <p className="block text-sm font-normal leading-none text-slate-500">
                  Quantity
                </p>
              </th>
            </tr>
          </thead>
          <tbody>{tableRows(words_trend_n50, qty_trend_n50)}</tbody>
        </table>
      </div>
    </>
  );
};

export default ShowData;
