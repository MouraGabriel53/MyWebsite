import CardSkills from "../../components/cardSkills";
import { Content, ContentCards } from "./styles";

export default function SkillsPage() {
    return (
        <>
            <Content>
                <ContentCards>
                    <CardSkills></CardSkills>
                    <CardSkills></CardSkills>
                    <CardSkills></CardSkills>
                    <CardSkills></CardSkills>
                    <CardSkills></CardSkills>
                </ContentCards>
            </Content>
        </>
    )
}