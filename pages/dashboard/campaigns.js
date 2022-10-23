import Image from 'next/image'
import React from 'react'
import { ChevronLeft, ChevronRight } from '../../assets/svgIcons'
import LandingLayout from '../../layouts/landing.layout'
import { ActionBtn, Checkbox, Container, FilterContainer, NavBtn, PageBtn, Pages, Pagination, SearchContainer, Table, TableContent, TableControls, TableFooter, TableHeader, TableWrapper, TBody, Td, Th, THead, Tr, Wrapper } from '../../styles/connect-pages.style'

const Campaigns = () => {
  return (
    <Container>
        <Wrapper>
            <TableWrapper>
                <TableHeader>
                    <h2>My Campaigns</h2>
                </TableHeader>
                <TableContent>
                    <TableControls>
                        <SearchContainer>
                            <input type="text" placeholder="Search by influencer"/>
                            <button>
                                <Image src="/search-b.svg" alt="" height={22} width={22}/>
                            </button>
                        </SearchContainer>
                        <FilterContainer>
                            <button><Image src="/filter.svg" alt="" height={20} width={20} /><span>Filter</span></button>
                            <button><Image src="/upload.svg" alt="" height={20} width={20} /><span>Export</span></button>
                            <button>Find Influencers</button>
                        </FilterContainer>
                    </TableControls>
                    <Table>
                        <THead>
                            <Th>
                                <Td cellWidth="50px">
                                    <Checkbox>
                                    </Checkbox>
                                </Td>
                                <Td cellWidth="300px">Influencer</Td>
                                <Td cellWidth="200px">Channel</Td>
                                <Td cellWidth="150px">Start Date</Td>
                                <Td cellWidth="150px">Duration</Td>
                                <Td cellWidth="120px">Status</Td>
                                <Td cellWidth="120px">Action</Td>
                            </Th>
                        </THead>
                        <TBody>
                            <Tr>
                                <Td cellWidth="50px">
                                    <Checkbox>
                                    </Checkbox>
                                </Td>
                                <Td cellWidth="300px">Ezekiel Alawode</Td>
                                <Td cellWidth="200px">Instagram</Td>
                                <Td cellWidth="150px">Sep 31, 2022</Td>
                                <Td cellWidth="150px">2 Months</Td>
                                <Td cellWidth="120px">Active</Td>
                                <Td cellWidth="120px">
                                    <ActionBtn>View</ActionBtn>
                                </Td>
                            </Tr>
                            <Tr>
                                <Td cellWidth="50px">
                                    <Checkbox>
                                    </Checkbox>
                                </Td>
                                <Td cellWidth="300px">Ezekiel Alawode</Td>
                                <Td cellWidth="200px">Instagram</Td>
                                <Td cellWidth="150px">Sep 31, 2022</Td>
                                <Td cellWidth="150px">2 Months</Td>
                                <Td cellWidth="120px">Active</Td>
                                <Td cellWidth="120px">
                                    <ActionBtn>View</ActionBtn>
                                </Td>
                            </Tr>
                            <Tr>
                                <Td cellWidth="50px">
                                    <Checkbox>
                                    </Checkbox>
                                </Td>
                                <Td cellWidth="300px">Ezekiel Alawode</Td>
                                <Td cellWidth="200px">Instagram</Td>
                                <Td cellWidth="150px">Sep 31, 2022</Td>
                                <Td cellWidth="150px">2 Months</Td>
                                <Td cellWidth="120px">Active</Td>
                                <Td cellWidth="120px">
                                    <ActionBtn>View</ActionBtn>
                                </Td>
                            </Tr>
                            <Tr>
                                <Td cellWidth="50px">
                                    <Checkbox>
                                    </Checkbox>
                                </Td>
                                <Td cellWidth="300px">Ezekiel Alawode</Td>
                                <Td cellWidth="200px">Instagram</Td>
                                <Td cellWidth="150px">Sep 31, 2022</Td>
                                <Td cellWidth="150px">2 Months</Td>
                                <Td cellWidth="120px">Active</Td>
                                <Td cellWidth="120px">
                                    <ActionBtn>View</ActionBtn>
                                </Td>
                            </Tr>
                            <Tr>
                                <Td cellWidth="50px">
                                    <Checkbox>
                                    </Checkbox>
                                </Td>
                                <Td cellWidth="300px">Ezekiel Alawode</Td>
                                <Td cellWidth="200px">Instagram</Td>
                                <Td cellWidth="150px">Sep 31, 2022</Td>
                                <Td cellWidth="150px">2 Months</Td>
                                <Td cellWidth="120px">Active</Td>
                                <Td cellWidth="120px">
                                    <ActionBtn>View</ActionBtn>
                                </Td>
                            </Tr>
                        </TBody>
                    </Table>
                    <TableFooter>
                        <p>Showing 10 of 500</p>
                        <Pagination>
                            <NavBtn>
                                <ChevronLeft />
                            </NavBtn>
                            <Pages>
                                <PageBtn activePage={true}>1</PageBtn>
                                <PageBtn>2</PageBtn>
                                <PageBtn>3</PageBtn>
                                <PageBtn>4</PageBtn>
                                -
                                <PageBtn>50</PageBtn>
                            </Pages>
                            <NavBtn>
                                <ChevronRight />
                            </NavBtn>
                        </Pagination>
                    </TableFooter>
                </TableContent>
            </TableWrapper>
        </Wrapper>
    </Container>
  )
}

Campaigns.getLayout = (page) => (
    <LandingLayout>
        {page}
    </LandingLayout>
)

export default Campaigns