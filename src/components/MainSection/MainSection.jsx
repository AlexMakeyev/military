import main_back from '../../images/main_back.png';
import {
  Link,
  MainBack,
  MainContainer,
  PositionContainer,
  MainTitle,
  MainSubTitle,
  TitleContainer,
} from './MainSection.styled';
export default function MainSection() {
  return (
    <PositionContainer>
      <MainBack src={main_back} alt="" width="1920" height="700" />
      <MainContainer>
        <TitleContainer>
          <MainTitle>Swamp Brotherhood</MainTitle>
          <MainSubTitle>Виробляємо маскувальні засоби для ЗСУ</MainSubTitle>
        </TitleContainer>
        <Link type="button">Допомогти ЗСУ</Link>
      </MainContainer>
    </PositionContainer>
  );
}
