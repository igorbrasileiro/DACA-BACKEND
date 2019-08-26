import { merge } from 'lodash';
import { resolvers as userResolvers } from './resources/user/user.resolvers';

const resolvers = merge(userResolvers);

export default resolvers;
