import { CirculoAvatar, ImagemAvatar } from "./style";
import FontAwesome5 from '@expo/vector-icons/FontAwesome5';
import { ContainerLogoAvatar } from "./style";
import EvilIcons from '@expo/vector-icons/EvilIcons';

function Avatar () {
    return(
        <ContainerLogoAvatar>
            <FontAwesome5 
            name="user-circle" 
            size={83} 
            color="black"
            />
            <EvilIcons 
            name="camera"
            size={24} 
            color="black" />
        </ContainerLogoAvatar>
    );
};

export default Avatar;