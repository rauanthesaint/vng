// Home Page
'use client';
import {
    Button,
    Card,
    Accordion,
    AccordionItem,
    CardHeader,
    CardBody,
    CardFooter,
    Avatar,
    Pagination,
} from '@nextui-org/react';
import React from 'react';
import Link from 'next/link';
import Container from '@/components/container.component';
import { Numbers } from '@/data/numbers';
export default function Page() {
    const defaultContent =
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.';
    return (
        <div className="light">
            {/* Banner section */}
            <section className="my-16">
                <Container classname="flex flex-col gap-6">
                    {/* Banner content */}
                    <h1 className="text-foreground font-bold text-4xl">
                        Lorem ipsum dolor sit amet
                    </h1>

                    <p className="">
                        Lorem ipsum dolor sit, amet consectetur adipisicing
                        elit. Et voluptate rerum necessitatibus distinctio
                        ratione esse ipsa nulla eveniet vitae. Quam eligendi
                        praesentium amet cum maiores perferendis. Doloremque
                        tempore ratione illo?
                    </p>

                    <div>
                        <Button
                            size="lg"
                            fullWidth
                            className="bg-primary text-background mb-2"
                        >
                            Выбрать страну
                        </Button>

                        <Link
                            href={'https://t.me/rauanthesaint'}
                            target="blank"
                        >
                            <Button size="lg" fullWidth variant="bordered">
                                Задать вопрос
                            </Button>
                        </Link>
                    </div>
                </Container>
            </section>

            <section className="my-16">
                <Container>
                    <h2>Почему выбирают нас</h2>

                    <div className="flex flex-wrap gap-2">
                        {Numbers.map((elem) => {
                            return (
                                <Card
                                    key={elem.id}
                                    isPressable
                                    shadow="none"
                                    className="flex-grow min-w-64"
                                >
                                    <CardHeader className="text-5xl font-bold">
                                        {elem.number}
                                    </CardHeader>
                                    <CardBody>
                                        jdkjwedjkwejkdklwejdkjwedk
                                    </CardBody>
                                    <CardFooter className="text-sm">
                                        {elem.description}
                                    </CardFooter>
                                </Card>
                            );
                        })}
                    </div>
                </Container>
            </section>

            <section className="my-16">
                <Container>
                    <Accordion>
                        <AccordionItem
                            key={1}
                            aria-label="Accordion-1"
                            title="Accordion 1"
                        >
                            {defaultContent}
                        </AccordionItem>
                    </Accordion>
                </Container>
            </section>

            <section className="my-16">
                <div className="grid gap-3 grid-flow-col auto-cols-[90%] overflow-x-scroll snap-x aboba">
                    <Card shadow="none" className="snap-center">
                        <CardHeader>
                            <Avatar name="Rauan" color="secondary" />
                            <h3 className="font-bold">Rauan Karanov </h3>
                        </CardHeader>
                        <CardBody>
                            Lorem ipsum dolor sit amet consectetur adipisicing
                            elit. Officia fugit, blanditiis odio quis quasi
                            accusamus beatae rerum obcaecati possimus nam eaque
                            doloremque optio. Enim officiis molestias atque ab
                            ipsa totam.
                        </CardBody>
                        <CardFooter>VK</CardFooter>
                    </Card>
                    <Card shadow="none" className="snap-center">
                        <CardHeader>
                            <Avatar name="Rauan" color="secondary" />
                            <h3 className="font-bold">Rauan Karanov </h3>
                        </CardHeader>
                        <CardBody>
                            Lorem ipsum dolor sit amet consectetur adipisicing
                            elit. Officia fugit, blanditiis odio quis quasi
                            accusamus beatae rerum obcaecati possimus nam eaque
                            doloremque optio. Enim officiis molestias atque ab
                            ipsa totam.
                        </CardBody>
                        <CardFooter>VK</CardFooter>
                    </Card>
                    <Card shadow="none" className="snap-center">
                        <CardHeader>
                            <Avatar name="Rauan" color="secondary" />
                            <h3 className="font-bold">Rauan Karanov </h3>
                        </CardHeader>
                        <CardBody>
                            Lorem ipsum dolor sit amet consectetur adipisicing
                            elit. Officia fugit, blanditiis odio quis quasi
                            accusamus beatae rerum obcaecati possimus nam eaque
                            doloremque optio. Enim officiis molestias atque ab
                            ipsa totam.
                        </CardBody>
                        <CardFooter>VK</CardFooter>
                    </Card>
                </div>
                <Pagination
                    variant="light"
                    isCompact
                    showControls
                    total={Numbers.length}
                    initialPage={1}
                />
            </section>
        </div>
    );
}
