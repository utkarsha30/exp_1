const RelativesList = () => {
  const relativeList = ["Utkarsha", "Tejas", "Unnatee", "Shreyash", "Prachi"];
  return (
    <div>
      <ol>
        {relativeList.map((relativeName, index) => (
          <li key={index}>{relativeName}</li>
        ))}
      </ol>
    </div>
  );
};
export default RelativesList;
