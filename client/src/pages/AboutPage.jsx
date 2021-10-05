import React from "react";
import styled from "styled-components";

const AboutContainer = styled.section`
  display: flex;
  align-items: flex-start;
  justify-content: center;
  background-color: var(--clr-background);
`;

const Description = styled.div`
  flex: 2;
  padding: 30px 50px;
  margin: 40px 60px;
  background-color: white;
  border-radius: 30px;

  h1 {
    font-size: 32px;
    font-weight: 700;
  }

  hr {
    width: 100px;
    border: 2px solid var(--clr-primary-2);
    margin-bottom: 20px;
  }

  p {
    text-align: justify;
    font-weight: 400;
    line-height: 24px;
  }
`;

const Decoration = styled.div`
  flex: 1;
  margin: 40px 10px 40px 60px;
  padding-top: 20px;

  img {
    border-radius: 10px;
    width: 100%;
    height: 600px;
    object-fit: cover;
  }
`;

const AboutPage = () => {
  return (
    <AboutContainer>
      <Decoration>
        <img src="https://i.blogs.es/cfee8e/img-4/1366_2000.jpg" alt="" />
      </Decoration>
      <Description>
        <h1>About</h1>
        <hr />
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Doloribus
          blanditiis dolorem eos cumque necessitatibus eaque. Praesentium sit
          beatae nam pariatur accusantium in cum itaque ducimus sunt quis
          nostrum temporibus repudiandae voluptatibus eaque deserunt,
          exercitationem voluptatum numquam hic? Non mollitia sint quidem cum
          velit voluptatem! Obcaecati sit ad architecto! Reprehenderit, placeat
          possimus rem libero corrupti modi ipsum. Dignissimos delectus odio
          error libero nulla accusamus quos quibusdam, officiis corrupti fuga
          natus mollitia tenetur aperiam quia blanditiis reiciendis dolore porro
          reprehenderit et nobis atque non provident ipsum explicabo? Culpa,
          nisi inventore. Recusandae suscipit harum repudiandae optio eos,
          accusamus nulla itaque dolore mollitia, minus magnam inventore?
          Praesentium molestias maxime numquam iusto nemo incidunt assumenda
          corporis quaerat, non vero quis? Quia quis necessitatibus iste,
          repellendus repellat, rerum facere dicta sint tempora optio cumque
          nesciunt molestias alias molestiae? Accusamus, sequi sit. Alias
          deleniti nihil, autem repudiandae delectus cumque quos, ea ad officia,
          dolorem animi explicabo tempore inventore iusto eius eum esse optio
          eveniet nesciunt debitis voluptatum? Deserunt mollitia ex nulla eius,
          voluptatum numquam. Dolores, facere iste, vero alias quasi mollitia
          maiores, fugit perferendis id maxime commodi? Debitis placeat vero
          iusto omnis unde perspiciatis et assumenda similique nihil consequatur
          aliquam animi, hic molestiae maiores repudiandae repellendus incidunt
          illum dolore eaque consectetur eveniet, magni fugit quis voluptatum.
          Illum minus neque eius sit, consectetur aspernatur, doloribus nihil
          exercitationem, at autem accusamus necessitatibus esse cum commodi
          consequatur dicta. Quisquam, optio commodi numquam delectus corrupti
          quis. Quia provident sint eaque iure neque quaerat soluta eveniet
          laudantium distinctio id numquam sunt, doloribus debitis nulla quas
          deleniti hic doloremque odio! Debitis aliquid nisi saepe similique
          earum adipisci accusantium obcaecati quos in. Quam optio nobis eaque
          dolorem beatae deserunt inventore? Voluptate consectetur similique
          ducimus cumque beatae quis nobis molestiae sit inventore, fuga animi
          accusamus quos doloribus quo, minima enim labore ex iste? Voluptates,
          porro.
        </p>
      </Description>
    </AboutContainer>
  );
};

export default AboutPage;
