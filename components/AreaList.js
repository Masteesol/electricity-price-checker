import { AreaItem } from "./AreaItem";

export const AreaList = ({ areas }) => {
  return (
    <>
      {areas &&
        areas.map((area) => <AreaItem key={area.area_code} data={area} />)}
    </>
  );
};
