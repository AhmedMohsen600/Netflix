import React from "react";
import jumboData from "../fixtures/jumbo.json";
import { Jumbotron } from "../components";
export function JumbotronContainer() {
  return (
    <Jumbotron.Container>
      {jumboData.map((item) => (
        <Jumbotron key={item.id} direction={item.direction}>
          <Jumbotron.Pane>
            <Jumbotron.Title>{item.title}</Jumbotron.Title>
            <Jumbotron.Subtitle>{item.subTitle}</Jumbotron.Subtitle>
          </Jumbotron.Pane>
          <Jumbotron.Pane>
            <Jumbotron.ImageHolder>
              <Jumbotron.Image src={item.image} alt={item.alt} />
            </Jumbotron.ImageHolder>
            <Jumbotron.VideoHolder>
              <Jumbotron.Video autoPlay playsInline muted loop>
                <source src={item.video} />
              </Jumbotron.Video>
            </Jumbotron.VideoHolder>
          </Jumbotron.Pane>
        </Jumbotron>
      ))}
    </Jumbotron.Container>
  );
}
