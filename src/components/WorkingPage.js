import React, { useState } from 'react'
import { Form } from 'antd'
import styled from 'styled-components'

const Grid = styled.div`
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    grid-template-rows: repeat(2,1fr);
    gap: 10px;
    padding: 10px;
`;

const MainArea = styled.div`
    grid-row: 1/3;
    grid-column: 1/4;
    background-color: #f4f4f2;
    height: 800px;
    text-align: center;
`;

const WorkImg = styled.img`
    max-width: 100%;
    max-height: 100%;
`;

const WorkRepos = styled.div`
    grid-column: 4/5;
    grid-row: 1/2;
    background-color: #e8e8e8;
`;

const ListDiv = styled.div`
    height:90%;
    padding:10px;
`;

const BtnDiv = styled.div`
    position: absolute;
    right: 20px;
`;

const Labels = styled.div`
    grid-column: 4/5;
    grid-row: 2/3;
    background-color: #bbbfca;
`;


function WorkingPage() {

    const initialProducts = {
        name: "",
        image_array: [], // array of strings 
    };

    const [FileUrl, setFileUrl] = useState(null);
    const [products, setProducts] = useState(initialProducts);

    const onMultipleImgHandler = (event) => {
        if (event.target.files) {
            setProducts({ ...products, image_array: [...event.target.files] });
        }
        console.log("Update slider images", products);


        const imgFile = event.target.files[0];
        const imgUrl = URL.createObjectURL(imgFile);
        setFileUrl(imgUrl)

    };

    return (
        <div>
            <Grid>
                    <MainArea>
                        <WorkImg src={FileUrl} />
                    </MainArea>
                    <WorkRepos>
                        <ListDiv>
                            <ol>
                                <li>File1</li>
                                <li>File2</li>
                                <li>...</li>
                            </ol>
                        </ListDiv>
                        <BtnDiv>
                            <button onClick>Add photo</button>
                        </BtnDiv>
                    </WorkRepos>
                    <Labels>
                        <ListDiv>
                            <ol>
                                <li>Label1</li>
                                <li>Label2</li>
                                <li>...</li>
                            </ol>
                        </ListDiv>
                        <BtnDiv>
                            <button onClick>Add Label</button>
                        </BtnDiv>
                    </Labels>
            </Grid>
        </div>
    )
}

export default WorkingPage
