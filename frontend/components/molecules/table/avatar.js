export function AvatarCell({ value, column, row }) {
  //cek apakah ada imgUrl
  const imgUrl = row.original[column.imgAccessor]
    ? row.original[column.imgAccessor]
    : "/img/avatar/default.png";
  return (
    <div className="flex items-center">
      <div className="flex-shrink-0 h-10 w-10">
        <img
          className="h-10 w-10 rounded-full"
          src={imgUrl}
          alt={`avatar-${value}`}
        />
      </div>
      <div className="ml-4">
        <div className="text-sm font-medium text-gray-900">{value}</div>
        <div className="text-sm text-gray-500">
          {row.original[column.emailAccessor]}
        </div>
      </div>
    </div>
  );
}
