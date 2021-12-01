import React, { useContext, useState, useEffect } from "react";
import SelectProfileContainer from "./profiles";
import { FirebaseContext } from "../context/firebase";
import Fuse from "fuse.js";
import { Card, Header, Loading, Player } from "../components";
import logo from "../logo.svg";
import * as ROUTES from "../constant/route";
import { FooterContainer } from "../containers/footer";
export function BrowseContainer({ slides }) {
  const [searchTerm, setSearchTerm] = useState("");
  const [category, setCategory] = useState("series");
  const [profile, setProfile] = useState({});
  const [loading, setLoading] = useState(true);
  const [slidesRow, setSlidesRow] = useState([]);
  const [navbar, setNavbar] = useState(false);
  const { firebase } = useContext(FirebaseContext);
  const user = firebase.auth().currentUser || {};
  const changeHeaderBackground = () => {
    if (window.scrollY >= 10) setNavbar(true);
    else setNavbar(false);
  };
  window.addEventListener("scroll", changeHeaderBackground);
  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 1000);
  }, [profile.displayName]);

  useEffect(() => {
    setSlidesRow(slides[category]);
  }, [slides, category]);
  // handel life search.
  useEffect(() => {
    const fuse = new Fuse(slidesRow, {
      keys: ["data.description", "data.title", "data.genre"],
    });
    const results = fuse.search(searchTerm).map(({ item }) => item);
    if (slidesRow.length > 0 && searchTerm.length > 3 && results.length > 0)
      setSlidesRow(results);
    else setSlidesRow(slides[category]);
  }, [searchTerm]);
  return profile.displayName ? (
    <>
      {loading ? <Loading src={user.photoURL} /> : <Loading.RealeaseBody />}
      <Header dontShowOnSmallViewPort src="joker1">
        <Header.Frame
          paddingBrowse
          stickyBrowse
          active={navbar}
          onlyBrowseHeader
        >
          <Header.Group>
            <Header.Logo to={ROUTES.BROWSE} src={logo} alt="Netflix" />
            <Header.TextLink
              onClick={() => setCategory("series")}
              active={category === "series" ? true : false}
            >
              Series
            </Header.TextLink>
            <Header.TextLink
              onClick={() => setCategory("films")}
              active={category === "films" ? true : false}
            >
              Films
            </Header.TextLink>
          </Header.Group>
          <Header.Group>
            <Header.Search
              searchTerm={searchTerm}
              setSearchTerm={setSearchTerm}
            />
            <Header.Profile>
              <Header.Picture src={user.photoURL} alt="User-pic" />
              <Header.Dropdown>
                <Header.Group>
                  <Header.Picture src={user.photoURL} alt="User-pic" />
                  <Header.TextLink>{user.displayName}</Header.TextLink>
                </Header.Group>
                <Header.Group>
                  <Header.TextLink onClick={() => firebase.auth().signOut()}>
                    Sign out
                  </Header.TextLink>
                </Header.Group>
              </Header.Dropdown>
            </Header.Profile>
          </Header.Group>
        </Header.Frame>
        <Header.Feature>
          <Header.Title>Watch Joker Now</Header.Title>
          <Header.TextSmall>
            Forever alone in a crowd, failed comedian Arthar fleck seeks
            connections as he walks the street of Gotham city. Arthar wear two
            masks -- the one he paints for his day job as a clown, and the guise
            he projects in a futile attempt to feel like he's part of the world
            around him.
          </Header.TextSmall>
          <Header.PlayButton>Play</Header.PlayButton>
        </Header.Feature>
      </Header>
      <Card.Group>
        {slidesRow.map((slideItem) => (
          <Card key={`${category}-${slideItem.title.toLowerCase()}`}>
            <Card.Title>{slideItem.title}</Card.Title>
            <Card.Entities>
              {slideItem.data.map((item) => (
                <Card.Item key={item.docId} item={item}>
                  <Card.Image
                    src={`/images/${category}/${item.genre}/${item.slug}/small.jpg`}
                  />
                  <Card.Meta>
                    <Card.SubTitle>{item.title}</Card.SubTitle>
                    <Card.Text>{item.description}</Card.Text>
                  </Card.Meta>
                </Card.Item>
              ))}
            </Card.Entities>
            <Card.Feature category={category}>
              <Player>
                <Player.Button>Play</Player.Button>
                <Player.Video src="/videos/bunny.mp4" />
              </Player>
            </Card.Feature>
          </Card>
        ))}
      </Card.Group>
      <FooterContainer />
    </>
  ) : (
    <SelectProfileContainer setProfile={setProfile} user={user} />
  );
}
