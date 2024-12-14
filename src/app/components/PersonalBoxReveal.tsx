import BoxReveal from "@/components/ui/box-reveal";
import { ReactElement } from "react";
const PersonalBoxReveal = ({
    children,
}: Readonly<{ children: ReactElement }>) => {
    return (
        <BoxReveal boxColor={"#fff"} duration={0.5}>
            {children}
        </BoxReveal>
    );
};
export default PersonalBoxReveal;