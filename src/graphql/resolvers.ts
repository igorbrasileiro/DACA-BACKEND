import { merge } from 'lodash';
import { resolvers as userResolvers } from './resources/user/user.resolvers';
import { resolvers as partyResolvers } from './resources/party/party.resolvers';

const resolvers = merge(userResolvers, partyResolvers);

export default resolvers;
