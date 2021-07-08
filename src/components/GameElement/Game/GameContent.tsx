import * as PIXI from 'pixi.js'
import ground from '../Assets/Background/bg_ground.png'
import sky from '../Assets/Background/bg_sky.png'
import tree from '../Assets/Background/bg_trees.png'
import bush1 from '../Assets/Item/Bush/Bush_1.png'
import bush2 from '../Assets/Item/Bush/Bush_2.png'
import bush3 from '../Assets/Item/Bush/Bush_3.png'
import bush4 from '../Assets/Item/Bush/Bush_4.png'
import treef1 from '../Assets/Item/Tree/TreeF_1.png'
import treef2 from '../Assets/Item/Tree/TreeF_2.png'

const GameContent = (app: any,gameRef: any) => {

    const container = new PIXI.Container();

    app.stage.addChild(container);
  
    const loader = new PIXI.Loader();
    loader.add("ground", ground);
    loader.add("sky", sky);
    loader.add("tree", tree);
    loader.add("bush1", bush1);
    loader.add("bush2", bush2);
    loader.add("bush3", bush3);
    loader.add("treef1", treef1);
    loader.add("treef2", treef2);
    loader.add("bush4", bush4);
    loader.load((loader, resource) => {
      console.log("resource", resource);
    });

    //Background 
    const skyTexture = PIXI.Texture.from(sky);
    const bgSky = new PIXI.Sprite(skyTexture);
    bgSky.scale.set(0.7);
    container.addChild(bgSky)

    const texture = PIXI.Texture.from(ground);
    const dirt = new PIXI.Sprite(texture);
    dirt.scale.set(0.7);
    dirt.anchor.set(0,-1);
    container.addChild(dirt)

    const treeTexture = PIXI.Texture.from(tree);
    const bgTree = new PIXI.Sprite(treeTexture);
    bgTree.scale.set(0.7);
    bgTree.anchor.set(0,-1);
    container.addChild(bgTree)

    //Item 
    const treef1Texture = PIXI.Texture.from(treef1);
    const Treef1 = new PIXI.Sprite(treef1Texture);
    Treef1.scale.set(0.8);
    Treef1.position.set(-300,-100);
    container.addChild(Treef1)

    const treef2Texture = PIXI.Texture.from(treef2);
    const Treef2 = new PIXI.Sprite(treef2Texture);
    Treef2.scale.set(0.8)
    Treef2.position.set(700,-200);
    Treef2.scale.x = -1
    container.addChild(Treef2)

    const bush2Texture = PIXI.Texture.from(bush2);
    const Bush2 = new PIXI.Sprite(bush2Texture);
    Bush2.scale.set(0.4);
    Bush2.position.set(-50,500);
    container.addChild(Bush2)

    const bush1Texture = PIXI.Texture.from(bush1);
    const Bush1 = new PIXI.Sprite(bush1Texture);
    Bush1.scale.set(0.7);
    Bush1.position.set(-100,600);
    container.addChild(Bush1)

    const bush3Texture = PIXI.Texture.from(bush3);
    const Bush3 = new PIXI.Sprite(bush3Texture);
    Bush3.scale.set(0.5);
    Bush3.position.set(400,400);
    container.addChild(Bush3)

    const bush4Texture = PIXI.Texture.from(bush4);
    const Bush4 = new PIXI.Sprite(bush4Texture);
    Bush4.scale.set(0.4);
    Bush4.position.set(450,550);
    container.addChild(Bush4)

    const onRelease = () => { console.log('Nothing') }
    console.log("container", container);
    return [app , onRelease]
};

export default GameContent;