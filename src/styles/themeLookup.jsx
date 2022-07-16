import { layouts, buttons, basic, icons, inputs, formfields } from "./themeHandler";
import styled from "styled-components";
import { GlobalSelector } from "./themeSelectors";

export function ThemeLookup() {
  console.log("accessing themeLookup")
  return (
    <>
    
      <Sidebar>
        <div className="name">var(--backgroundColor) </div>
        <div className="backgroundColor"></div>
        <div className="name">var(--backgroundTextColor) </div>
        <div className="backgroundTextColor"></div>
        
        <div className="name">var(--contrastColor) </div>
        <div className="contrastColor"></div>
        <div className="name"> var(--contrastTextColor) </div>
        <div className="contrastTextColor"></div>

        <div className="name">var(--modestColor) </div>
        <div className="modestColor"></div>
        <div className="name">var(--modestTextColor) </div>
        <div className="modestTextColor"></div>

        <div className="name">var(--normalColor) </div>
        <div className="normalColor"></div>
        <div className="name">var(--normalTextColor) </div>
        <div className="normalTextColor"></div>
        
        <div className="name">var(--highlightColor) </div>
        <div className="highlightColor"></div>
        <div className="name">var(--highlightTextColor) </div>
        <div className="highlightTextColor"></div>

        <div className="name">var(--alertColor) </div>
        <div className="alertColor"></div>
        <div className="name">var(--alertTextColor) </div>
        <div className="alertTextColor"></div>
        <div className="name">var(--NegativeColor)</div>
        <div className="NegativeColor"></div>
        <div className="name">var(--NegativeTextColor)</div>
        <div className="NegativeTextColor"></div>

        <div className="name">var(--containerInvisibleColor)</div>
        <div className="ContainerInvisibleColor"></div>
        <div className="name">var(--containerLightColor) </div>
        <div className="ContainerLightColor"></div>
        <div className="name">var(--containerSolidColor) </div>
        <div className="ContainerSolidColor"></div>
        <div className="name">var(--containerBorderColor)</div>
        <div className="containerBorderColor"></div>
        <div className="name">var(--containerTextColor) </div>
        <div className="ContainerTextColor"></div>
        <div className="name">var(--seperatorColor) </div>
        <div className="seperatorColor"></div>
        <div className="name">var(--inputBorderColor)</div>
        <div className="inputBorderColor"></div>
        <div className="name"> var(--inputBackgroundColor)</div>
        <div className="inputBackgroundColor"></div>

        <div className="name">var(--accentColor) </div>
        <div className="accentColor"></div>
        <div className="name">var(--shadowColor) </div>
        <div className="shadowColor"></div>
      </Sidebar>
      <ContentContainer>
        <h1>ThemeSelectors</h1>
        <label>Global.scss Selector</label>
        <GlobalSelector
          AvailableThemes={["CLEAN", "KF"]}
        />
    <h1>Buttons</h1>
        <article>
          buttons are loacated in CLEANButtons.jsx. They inherit their style from a central button Style <br/>
          every button can be disabled via disabled=true. <br/>
          every button has an activated style via active=true. <br/>
        </article>
        <buttons.Modest disable={true}>buttons.Modest disable=true</buttons.Modest>
        <buttons.Modest active={true}>buttons.Modest active=true</buttons.Modest>
        <buttons.Modest>buttons.Modest</buttons.Modest>
        <buttons.Normal>buttons.Normal</buttons.Normal>
        <buttons.Highlight>buttons.Highlight</buttons.Highlight>
        <buttons.Alert>buttons.Alert</buttons.Alert>
        <buttons.Negative>buttons.Negative</buttons.Negative>
        <buttons.LinkButton>buttons.LinkButton</buttons.LinkButton>
        <buttons.LinkScroll to="/">buttons.LinkScroll</buttons.LinkScroll>
        <buttons.LinkRouter to="/">buttons.LinkRouter</buttons.LinkRouter>
        <buttons.Dropdown>buttons.Dropdown</buttons.Dropdown>
<h1>Icon  (icons)</h1>
  <h3>They are recoloring on themeselect</h3>
<article>
  icons are now derived from our own icon library, which is always expanding.
  How to add a new Icon:
  <ol>
    <li>Design Icon in Figma in Black and white</li>
    <li>Export the Icon in Figma via svg</li>
    <li>place file in KFIcons</li>
    <li>adapt stroke and value in the .svg file to be var(--iconTextColor) or var(--iconBackgroundColor)</li>
    <li>import svg in CLEANIcon.js</li>
    <li>make a functional component and use a wrapper (see CLEANIcon.js)</li>
    <li>Add functional component to map in CLEANIcon</li>
    <li>Add Icon to ThemeLookup (this file)</li>
    <li>Make sure it looks good with all themes</li>
    <li>make sure it is aligned to bottom and left like the other icons</li>
    
  </ol>
</article>

        <layouts.ContainerSolid>
          icons.Add
          <icons.Add />
          icons.Arrow
          <icons.Arrow />
          icons.Check
          <icons.Arrow />
          icons.Download
          <icons.Download />
          icons.Expand
          <icons.Expand />
          icons.Lougout
          <icons.Logout />
          icons.Pen
          <icons.Pen />
          icons.Plus
          <icons.Plus />
          icons.Radio
          <icons.Radio />
          icons.Save
          <icons.Save />
          icons.Search
          <icons.Search />
          icons.ShoppingCard
          <icons.ShoppingCard />
          icons.Upload
          <icons.Upload />
          icons.X
          <icons.X />
        </layouts.ContainerSolid>
        
        <h1>Input (Non Formik) (inputs)</h1>
        <inputs.SelectCustom
          onSelect=""
          Placeholder = {["nothing"]}
          options = {["one","two", "three"]}
          initialindex = {0}
          initialValue = "two"
          maxDropDownHeight = "inherit"
          maxDropDownWidth = "inherit"
          callback = ""
        />

     
        <h1>Containers (layouts)</h1>
        <article>
          Layouts is generally something that provides positions and sizes for child elements.
          <br/>
          You can find Containers in here.
          
        </article>
        <layouts.ContainerSpace>
          layouts.ContainerSpace //:an invisible container for vertical spacing
        </layouts.ContainerSpace>
        <layouts.ContainerInvisible>
          layouts.ContainerInvisible //: an invisible container to contain elements
        </layouts.ContainerInvisible>
        <layouts.ContainerLight>layouts.ContainerLight</layouts.ContainerLight>
        <layouts.ContainerSolid>
          layouts.ContainerSolid //: Container light and container solid should be
          strucutred the following way: <br />
          when both are placed on a var(--backgroundColor) then one container
          light and container soldi should look exaclty the same <br />
          however when layering ContainerSolid and ContainerLight: ContainerLight will layer colors ontop
          and thus enablindg layering.
        </layouts.ContainerSolid>

      </ContentContainer>
    </>
  );
}
const Sidebar = styled(layouts.ContainerSolid)`
  display: flex;
  flex-wrap: wrap;
  width: 290px;
  font-size: small;
  position: fixed;

  div {
    height: 4px;
    width: 20%;
    padding: 12px;

    background-color: white;
    color: black;
  }
  .name {
    width: 80%;
  }
  .inputBorderColor {
    background-color: var(--inputBorderColor);
  }
  .containerBorderColor {
    background-color: var(--containerBorderColor);
  }
  .backgroundColor {
    background-color: var(--backgroundColor);
  }
  .backgroundTextColor {
    background-color: var(--backgroundTextColor);
  }
  .contrastColor {
    background-color: var(--contrastColor);
  }

  .contrastTextColor {
    background-color: var(--contrastTextColor);
  }

  .modestColor {
    background-color: var(--modestColor);
  }
  .modestTextColor {
    background-color: var(--normalTextColor);
  }
  .normalColor {
    background-color: var(--normalColor);
  }

  .normalTextColor {
    background-color: var(--normalTextColor);
  }

  .highlightColor {
    background-color: var(--highlightColor);
  }

  .highlightTextColor {
    background-color: var(--highlightTextColor);
  }

  .alertColor {
    background-color: var(--alertColor);
  }

  .alertColorTextColor {
    background-color: var(--alertColorTextColor);
  }

  .ContainerInvisibleColor {
    background-color: var(--containerInvisibleColor);
  }

  .ContainerLightColor {
    background-color: var(--containerLightColor);
  }
  .ContainerSolidColor {
    background-color: var(--containerSolidColor);
  }

  .ContainerTextColor {
    background-color: var(--containerTextColor);
  }
  .seperatorColor {
    background-color: var(--seperatorColor);
  }
  .shadowColor {
    background-color: var(--shadowColor);
  }
  .accentColor {
    background-color: var(--accentColor);
  }
  .inputBackgroundColor {
    background-color: var(--inputBackgroundColor);
  }
  .alertTextColor{
        background-color: var(--alertTextColor);
  }
  .NegativeColor{
    background-color: var(--NegativeColor);
  }
  .NegativeTextColor{
    background-color: var(--NegativeTextColor);
  }

`;

const ContentContainer = styled.section`

  display: flex;
  flex-wrap: wrap;
  padding: 10px 10px 10px 10px;
  margin-left: 300px;
  width: calc(100%-300px);
  background-color: var(--backgroundColor);

 

  h1 {
    width: 100%;
    margin: 25px 100px 5px 5px;
    font-size: large;
    border-bottom: solid 3px var(--seperatorColor);
    color: var(--backgroundTextColor);
  }
  article{
    width: 90%;
    font-size: 12px;
    padding: 0px 10px 20px 10px;
  }

  div {
    margin: 10px 10px 10px 10px;
  };
`;
