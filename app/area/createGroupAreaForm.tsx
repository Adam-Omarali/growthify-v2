import { Checkbox, Textarea, TextInput } from '@mantine/core';
import { useForm } from '@mantine/form';

export function AreaForm(){

    const form = useForm({
        initialValues: {
          name: '',
          description: '',
          trackHoursSpent: false
        },
    });

    return(
        <div>
            <form className='flex flex-col gap-3'>
                <TextInput withAsterisk label="Area Name" placeholder="Health" {...form.getInputProps('name')}/>
                <Textarea label="Description" placeholder="Motivations..." {...form.getInputProps('description')}/>
                <Checkbox mt="md" label="Track Hours Spent on Growth Area" {...form.getInputProps('trackHoursSpent', { type: 'checkbox' })}/>
            </form>
        </div>
    )
}