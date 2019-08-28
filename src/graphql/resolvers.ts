import { merge } from 'lodash';
import { resolvers as userResolvers } from './resources/user/user.resolvers';
import { resolvers as partyResolvers } from './resources/party/party.resolvers';
import { resolvers as deputeResolvers } from './resources/depute/depute.resolver';

const resolvers = merge(userResolvers, partyResolvers, deputeResolvers);

export default resolvers;
