import React from "react";
import {
  Card,
  CardHeader,
  CardTitle,
  CardImg,
  CardBody,
  CardFooter,
  Button
} from "shards-react";

export default function BasicCardExample() {
  return (
    <Card small={true} style={{ maxWidth: "250px" }}>
      <CardHeader></CardHeader>
      <CardImg src="https://edge.bonnieplants.com/www/uploads/20180920002445/organic-rosemary-web.jpg" />
      <CardBody>
        <CardTitle>Lorem Ipsum</CardTitle>
        <p>Lorem ipsum dolor sit amet.</p>
        <Button>Read more &rarr;</Button>
      </CardBody>
      
    </Card>
  );
}