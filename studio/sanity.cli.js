import {defineCliConfig} from 'sanity/cli'
import { projectId } from './id.config'

export default defineCliConfig({
  api: {
    projectId: projectId,
    dataset: 'production'
  }
})
