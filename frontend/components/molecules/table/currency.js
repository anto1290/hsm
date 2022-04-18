import CurrencyFormat from "react-currency-format";
export const Rupiah = ({ value }) => {
  return (
    <div className="flex items-center">
      <CurrencyFormat
        value={value}
        displayType={"text"}
        thousandSeparator={true}
        prefix={"Rp. "}
      />
    </div>
  );
};
