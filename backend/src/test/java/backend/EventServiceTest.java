package backend;

import java.util.List;

import org.junit.jupiter.api.Test;
import org.mockito.Mockito;

import static org.junit.jupiter.api.Assertions.assertEquals;

class EventServiceTest {

    @Test
    void shouldReturnAllEvents() {

        EventRepository repository = Mockito.mock(EventRepository.class);

        Event event = new Event();
        event.setTitle("Athens Jazz");

        Mockito.when(repository.findAll())
                .thenReturn(List.of(event));

        EventService service = new EventService(repository);

        List<Event> result = service.getAllEvents();

        assertEquals(1, result.size());
        assertEquals("Athens Jazz", result.get(0).getTitle());
    }
}