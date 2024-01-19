// Home Page

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
import Container from '@/components/container.component';
import { Numbers } from '@/data/numbers';
export default function Page() {
    const defaultContent =
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.';
    return (
        <div className="light">
            {/* Banner section */}
            <section className="my-16">
                <Container>
                    {/* Banner content */}
                    <div className="w-full h-[480px] bg-primary rounded-3xl p-6 relative">
                        <h1 className="text-background font-bold text-4xl mb-4">
                            Lorem ipsum dolor sit amet
                        </h1>

                        <p className="text-[#e9e9e9]">
                            Lorem ipsum dolor sit, amet consectetur adipisicing
                            elit. Et voluptate rerum necessitatibus distinctio
                            ratione esse ipsa nulla eveniet vitae. Quam eligendi
                            praesentium amet cum maiores perferendis. Doloremque
                            tempore ratione illo?
                        </p>

                        <Button
                            size="lg"
                            className="bg-background absolute bottom-6 z-10"
                        >
                            Узнать подробнее
                        </Button>
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
                                    className="h-32 flex-grow min-w-64"
                                >
                                    <CardHeader className="text-3xl font-bold">
                                        {elem.number}
                                    </CardHeader>
                                    <CardBody className="text-sm">
                                        {elem.description}
                                    </CardBody>
                                </Card>
                            );
                        })}
                    </div>
                </Container>
            </section>

            <section className="my-16">
                <Container>
                    <div className="flex flex-wrap gap-2">
                        {Numbers.map((elem) => {
                            return (
                                <Card
                                    key={elem.id}
                                    isPressable
                                    shadow="none"
                                    className="h-32 flex-grow min-w-64"
                                >
                                    <CardHeader className="text-3xl font-bold">
                                        {elem.number}
                                    </CardHeader>
                                    <CardBody className="text-sm">
                                        {elem.description}
                                    </CardBody>
                                </Card>
                            );
                        })}
                    </div>
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
