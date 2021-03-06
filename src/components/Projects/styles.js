import styled from 'styled-components';
import tw from 'tailwind.macro';

export const Posts = styled.div`
  ${tw`w-full flex flex-wrap`};
`;

export const ProjectItem = styled.div``

export const Post = styled.div`
  ${tw`w-full sm:w-1/2 p-3`};
`;

export const Card = styled.div`
  ${tw`w-full h-full rounded-lg flex flex-col overflow-hidden border border-gray-300`};
`;

export const Content = styled.div`
  ${tw`p-4 text-indigo-900`};
`;

export const Image = styled.figure`
  min-height: 180.83px;
  ${tw`w-full`};
`;

export const Title = styled.h3`
  ${tw`font-semibold mb-4`};
`;

export const Description = styled.p``;

export const Date = styled.h3`
  ${tw`text-xs text-pink-500`};
`;

export const Tags = styled.div`
  ${tw`p-4 pt-2 mt-auto`}
`;

export const Tag = styled.span`
  ${tw`text-xs text-indigo-900 border border-pink-500 rounded-full px-2 py-1 mr-2`}
`;

export const Stack = styled.div`${tw`text-xs px-4 text-indigo-900`}`;

export const ProjectIcon = styled.span`
  ${tw`flex items-center justify-center w-10 h-10 border border-pink-500 rounded-full mb-2 px-1 mr-1`};
`;

export const RowFlex = styled.div`
  ${tw`flex flex-row`};
  a {
    ${tw`text-indigo-900 hover:text-indigo-600 mx-2`};
  }
`