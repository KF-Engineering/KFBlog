import styled from "styled-components";


import { ReactComponent as ArrowA} from "./KFIcons/ArrowActive.svg";
import { ReactComponent as DL} from "./KFIcons/DownloadIcon.svg";
import { ReactComponent as AddIcn} from "./KFIcons/AddIcon.svg";
import { ReactComponent as checker} from "./KFIcons/check.svg";
import { ReactComponent as Expnd} from "./KFIcons/ExpandIcon.svg";
import { ReactComponent as Lgt} from "./KFIcons/Logout.svg";
import { ReactComponent as Pn} from "./KFIcons/Pen.svg";
import { ReactComponent as Rd} from "./KFIcons/RadioActiveIcon.svg";
import { ReactComponent as Sv} from "./KFIcons/SaveIcon.svg";
import { ReactComponent as Srch} from "./KFIcons/SearchIcon.svg";
import { ReactComponent as ShpngCrd} from "./KFIcons/ShoppingCard.svg";
import { ReactComponent as Upld} from "./KFIcons/UploadIcon.svg";
import { ReactComponent as Xout} from "./KFIcons/X-out.svg";


const SvgWrapper = styled.span`
  width: 25px;
  //width: ${(props) => (props.width ? props.width : "120px")};
  height: 25px;
  align-items: bottom;
  stroke: var(--highlightColor);
  rect {
    stroke: var(--highlightColor);
  }
`;

const Add = () => {
  return (
    <SvgWrapper>
      <AddIcn/>
    </SvgWrapper>
  );
};

const Arrow= () => {
  return (
    <SvgWrapper>
      <ArrowA/>
    </SvgWrapper>
  );
};

const check= () => {
  return (
    <SvgWrapper>
      <checker/>
    </SvgWrapper>
  );
};
//https://fontawesome.com/search

const Download = () => {
  return (
    <SvgWrapper>
      <DL />
    </SvgWrapper>
  );
};
const Expand= () => {
  return (
    <SvgWrapper>
      <Expnd/>
    </SvgWrapper>
  );
};
const Logout= () => {
  return (
    <SvgWrapper>
      <Lgt/>
    </SvgWrapper>
  );
};
const Pen= () => {
  return (
    <SvgWrapper>
      <Pn/>
    </SvgWrapper>
  );
};
const Plus= () => {
  return (
    <SvgWrapper>
      <pls/>
    </SvgWrapper>
  );
};
const Radio= () => {
  return (
    <SvgWrapper>
      <Rd/>
    </SvgWrapper>
  );
};
const Save= () => {
  return (
    <SvgWrapper>
      <Sv/>
    </SvgWrapper>
  );
};
const Search= () => {
  return (
    <SvgWrapper>
      <Srch/>
    </SvgWrapper>
  );
};
const ShoppingCard = () => {
  return (
    <SvgWrapper>
      <ShpngCrd/>
    </SvgWrapper>
  );
};
const Upload= () => {
  return (
    <SvgWrapper>
      <Upld/>
    </SvgWrapper>
  );
};
const X= () => {
  return (
    <SvgWrapper>
      <Xout/>
    </SvgWrapper>
  );
};
export const CLEANIcon = {
  Add: Add,
  Arrow:Arrow,
  Check:check,
  Download: Download,
  Expand: Expand,
  Logout: Logout,
  Pen: Pen,
  Plus: Plus,
  Radio: Radio,
  Save : Save,
  Search: Search,
  ShoppingCard: ShoppingCard,
  Upload: Upload,
  X: X,


};
